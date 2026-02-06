import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Digital Transformation Workshop',
      date: 'March 15, 2025',
      time: '09:00 AM - 04:00 PM',
      location: 'Harare, Zimbabwe',
      type: 'Workshop',
      description: 'Learn how to transform your business with modern digital tools and strategies.',
      spots: 50
    },
    {
      title: 'Web Development Bootcamp',
      date: 'April 5-7, 2025',
      time: '10:00 AM - 03:00 PM',
      location: 'Virtual Event',
      type: 'Bootcamp',
      description: '3-day intensive training on modern web development technologies.',
      spots: 100
    },
    {
      title: 'Design Thinking Masterclass',
      date: 'April 22, 2025',
      time: '02:00 PM - 05:00 PM',
      location: 'Bulawayo, Zimbabwe',
      type: 'Masterclass',
      description: 'Master the principles of user-centered design for digital products.',
      spots: 30
    }
  ]

  const pastEvents = [
    {
      title: 'Tech Startup Summit 2024',
      date: 'November 2024',
      location: 'Harare, Zimbabwe',
      attendees: 200
    },
    {
      title: 'Mobile App Development Workshop',
      date: 'October 2024',
      location: 'Virtual',
      attendees: 150
    },
    {
      title: 'Digital Marketing Conference',
      date: 'September 2024',
      location: 'Victoria Falls',
      attendees: 120
    }
  ]

  return (
    <>
      <Helmet>
        <title>Events – Zimnovate | Workshops & Conferences</title>
        <meta name="description" content="Join Zimnovate's workshops, bootcamps, and conferences on web development, digital marketing, and technology innovation." />
        <meta name="keywords" content="zimnovate events, tech workshops zimbabwe, web development bootcamp, digital events" />
        <link rel="canonical" href="https://zimnovate.com/events" />
        <meta property="og:title" content="Events – Zimnovate | Workshops & Conferences" />
        <meta property="og:description" content="Join Zimnovate's workshops, bootcamps, and conferences on web development and digital innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zimnovate.com/events" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Events – Zimnovate | Workshops & Conferences" />
        <meta name="twitter:description" content="Join Zimnovate's workshops, bootcamps, and conferences on web development and digital innovation." />
        <meta name="twitter:image" content="https://zimnovate.com/logo1.png" />
      </Helmet>
    <div>
      <PageHero
        title="Events & Workshops"
        subtitle="Connect, learn, and grow with our community events focused on technology and digital innovation."
        height="min-h-[45vh]"
      />

      <section className="mx-auto max-w-7xl px-12 py-16 md:px-16 md:py-20 lg:px-20">
        <h2 className="mb-12 text-2xl font-bold text-[var(--zim-black)]">
          Upcoming Events
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="rounded-2xl border border-[var(--zim-border)] bg-[var(--zim-card)] p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--zim-green)]/10 px-3 py-1 text-xs font-semibold text-[var(--zim-green)]">
                <Calendar className="h-3 w-3" />
                {event.type}
              </div>
              <h3 className="mb-2 text-lg font-bold text-[var(--zim-black)]">
                {event.title}
              </h3>
              <p className="mb-4 text-sm text-[var(--zim-fg)]">
                {event.description}
              </p>
              <div className="space-y-2 text-sm text-[var(--zim-fg)]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {event.spots} spots available
                </div>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--zim-green)] hover:underline">
                Register Now <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="mb-12 text-2xl font-bold text-[var(--zim-black)]">
            Past Events
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <div key={index} className="rounded-xl border border-[var(--zim-border)] bg-[var(--zim-card)]/50 p-5">
                <h3 className="mb-2 text-base font-semibold text-[var(--zim-black)]">
                  {event.title}
                </h3>
                <div className="space-y-1 text-sm text-[var(--zim-fg)]">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5" />
                    {event.attendees} attendees
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-[var(--zim-green)]/5 p-8 text-center">
          <h2 className="mb-4 text-xl font-bold text-[var(--zim-black)]">
            Want to partner with us for an event?
          </h2>
          <p className="mb-6 text-[var(--zim-fg)] max-w-xl mx-auto">
            We collaborate with organizations, schools, and communities to host technology events across Africa.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--zim-green)] px-8 py-3 text-sm font-semibold text-[var(--zim-black)] hover:brightness-110 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
    </>
  )
}

export default Events
