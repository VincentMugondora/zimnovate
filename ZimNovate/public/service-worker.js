/**
 * Service Worker for Zimnovate
 * Implements caching strategies for improved performance and offline support
 */

/* global clients */

const CACHE_NAME = 'zimnovate-v1';
const STATIC_CACHE = 'zimnovate-static-v1';
const IMAGE_CACHE = 'zimnovate-images-v1';
const API_CACHE = 'zimnovate-api-v1';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/logo1.png',
  '/logo.png',
  '/imgs/agency.jpg',
  '/src/main.jsx',
  '/src/index.css',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[Service Worker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[Service Worker] Install failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => {
              return name.startsWith('zimnovate-') && 
                     name !== STATIC_CACHE && 
                     name !== IMAGE_CACHE && 
                     name !== API_CACHE;
            })
            .map((name) => {
              console.log('[Service Worker] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http schemes
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Strategy for API calls - Network first, then cache
  if (url.pathname.startsWith('/api/') || url.pathname.includes('supabase')) {
    event.respondWith(
      networkFirstStrategy(request, API_CACHE)
    );
    return;
  }
  
  // Strategy for images - Cache first, then network
  if (request.destination === 'image' || url.hostname.includes('unsplash.com')) {
    event.respondWith(
      cacheFirstStrategy(request, IMAGE_CACHE)
    );
    return;
  }
  
  // Strategy for fonts - Cache first
  if (request.destination === 'font' || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      cacheFirstStrategy(request, STATIC_CACHE)
    );
    return;
  }
  
  // Strategy for JS/CSS - Stale while revalidate
  if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(
      staleWhileRevalidateStrategy(request, STATIC_CACHE)
    );
    return;
  }
  
  // Default strategy - Network with cache fallback
  event.respondWith(
    networkWithCacheFallback(request)
  );
});

/**
 * Cache First Strategy
 * Try cache first, fallback to network if not in cache
 * Good for: Images, fonts (rarely change)
 */
async function cacheFirstStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // Refresh cache in background
    fetchAndCache(request, cacheName);
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('[Service Worker] Cache first failed:', error);
    // Return a fallback if available
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

/**
 * Network First Strategy
 * Try network first, fallback to cache if offline
 * Good for: API calls (fresh data is priority)
 */
async function networkFirstStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[Service Worker] Network failed, trying cache');
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

/**
 * Stale While Revalidate Strategy
 * Serve from cache immediately, update cache in background
 * Good for: JS, CSS (fast delivery, fresh on next visit)
 */
async function staleWhileRevalidateStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  // Always fetch to update cache
  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch((error) => {
      console.log('[Service Worker] Stale-while-revalidate fetch failed:', error);
    });
  
  // Return cached version immediately if available
  return cachedResponse || fetchPromise;
}

/**
 * Network with Cache Fallback
 * Try network, fallback to cache if offline
 * Good for: HTML pages, general resources
 */
async function networkWithCacheFallback(request) {
  try {
    const networkResponse = await fetch(request);
    return networkResponse;
  } catch (error) {
    console.log('[Service Worker] Network failed, trying cache fallback');
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

/**
 * Fetch and cache helper
 */
async function fetchAndCache(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
  } catch (error) {
    console.log('[Service Worker] Background fetch failed:', error);
  }
}

// Background sync for form submissions (future enhancement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    console.log('[Service Worker] Background sync triggered');
    // Implement form sync logic here
  }
});

// Push notification support (future enhancement)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/logo1.png',
      badge: '/logo1.png',
      tag: data.tag || 'default',
      requireInteraction: true,
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});
