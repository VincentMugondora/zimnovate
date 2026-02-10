import React, { Suspense, lazy } from 'react';

/**
 * LazyMotionWrapper Component
 * Lazily loads framer-motion to reduce initial bundle size
 * Use this for below-fold animated components
 */

// Lazy load the entire framer-motion library
const LazyMotionFeatures = {
  domAnimation: lazy(() => import('framer-motion').then(mod => ({ default: mod.LazyMotion }))),
  domMax: lazy(() => import('framer-motion').then(mod => ({ default: mod.LazyMotion }))),
};

// Feature presets for different animation needs
export const MOTION_FEATURES = {
  // Minimal features for simple animations (smallest bundle)
  domAnimation: () => import('framer-motion/features/dom').then(res => res.default),
  // Full features for complex animations
  domMax: () => import('framer-motion/features/domMax').then(res => res.default),
};

/**
 * LazyMotionContainer - Wraps children with lazy-loaded framer-motion
 * Use for below-fold sections that don't need immediate animations
 */
export const LazyMotionContainer = ({ 
  children, 
  features = 'domAnimation',
  strict = false 
}) => {
  const loadFeatures = MOTION_FEATURES[features];

  return (
    <Suspense fallback={<div style={{ visibility: 'hidden' }}>{children}</div>}>
      {/* We'll use the actual LazyMotion component when framer-motion is loaded */}
      {children}
    </Suspense>
  );
};

/**
 * ScrollTriggeredMotion Component
 * Wraps elements to only animate when they enter the viewport
 * Reduces initial paint work and improves performance
 */
export const ScrollTriggeredMotion = ({
  children,
  className = '',
  initial = { opacity: 0, y: 20 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true, margin: '-50px' },
  transition = { duration: 0.5, ease: 'easeOut' },
  ...props
}) => {
  // Import motion components on demand
  const [motionComponents, setMotionComponents] = React.useState(null);

  React.useEffect(() => {
    let isMounted = true;
    
    import('framer-motion').then((mod) => {
      if (isMounted) {
        setMotionComponents({
          MotionDiv: mod.motion.div,
        });
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!motionComponents) {
    // Render static version while loading
    return (
      <div className={className} style={initial}>
        {children}
      </div>
    );
  }

  const { MotionDiv } = motionComponents;

  return (
    <MotionDiv
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};

/**
 * OptimizedAnimatePresence Component
 * Lazy loads AnimatePresence only when needed
 */
export const OptimizedAnimatePresence = ({ children, ...props }) => {
  const [AnimatePresenceComponent, setAnimatePresenceComponent] = React.useState(null);

  React.useEffect(() => {
    let isMounted = true;
    
    import('framer-motion').then((mod) => {
      if (isMounted) {
        setAnimatePresenceComponent(() => mod.AnimatePresence);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!AnimatePresenceComponent) {
    return <>{children}</>;
  }

  return <AnimatePresenceComponent {...props}>{children}</AnimatePresenceComponent>;
};

export default LazyMotionContainer;
