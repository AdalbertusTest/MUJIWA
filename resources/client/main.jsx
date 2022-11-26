import './tailwind.css'
import React from 'react'
import {createRoot} from 'react-dom/client'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import {createInertiaApp} from '@inertiajs/react'

createInertiaApp({
    progress: {
        color: '#0099FF',
    },
    title: name => name ? `PROJECT MUJIWA | ${name}` : 'PROJECT MUJIWA | Nová [Anime, Dorama, Manga] databáze založena na staré akihabaře a akidb',
    resolve: name => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),
    setup({el, App, props}) {
        createRoot(el).render(<App {...props} />)
    }
})
