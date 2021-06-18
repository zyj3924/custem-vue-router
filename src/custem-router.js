import Vue from 'vue'
import imgPure from './images/beauty-pure.jpeg'
import imgSexy from './images/beauty-sexy.jpeg'
import imglovely from './images/beauty-lovely.jpeg'


const EventBus = new Vue()

const BeautyLovely = {
    name: 'BeautyLovely',
    data: function () {
        return {
            imglovely
        }
    },
    template: `<div class="beauty-wrap">
                    <h2>可爱美女</h2>
                    <p><img :src="imglovely" alt=""></p>
                </div>`
}
const BeautyPure = {
    name: 'BeautyPure',
    data: function () {
        return {
            imgPure
        }
    },
    template: `<div class="beauty-wrap">
                    <h2>清纯美女</h2>
                    <p><img :src="imgPure" alt=""></p>
                </div>`
}
const BeautySexy = {
    name: 'BeautySexy',
    data: function () {
        return {
            imgSexy
        }
    },
    template: `<div class="beauty-wrap">
                    <h2>性感美女</h2>
                    <p><img :src="imgSexy" alt=""></p>
                </div>`
}

const html404 = {
    name: 'HtmlError',
    template: `<div class="beauty-wrap">
                <h2>页面不存在</h2>
                <p>04</p>
            </div>`
}

const routes = [
    {path: '/', name: 'BeautySexy'},
    {path: '/BeautyLovely', name: 'BeautyLovely'},
    {path: '/BeautySexy', name: 'BeautySexy'},
    {path: '/BeautyPure', name: 'BeautyPure'}
]

export const RouterLink = {
    props: {
        to:String
    },
    name: 'RouterLink',
    template: `<a  @click='linkClick' :to="to">
                <slot></slot>
              </a>`,
    methods: {
        linkClick (event) {
            event.preventDefault()
            window.history.pushState(null, null, this.to)
            EventBus.$emit('navigate')
        }
    }
}

export const RouterView = {
    name: 'router-view',
    components: {
        BeautyLovely,
        BeautySexy,
        BeautyPure,
        html404
    },
    data: function () {
        return {
            currentView: 'BeautyLovely'
        }
    },
    template: `<component :is="currentView"></component>`,
    methods: {
        getRoute () {
            const path = location.pathname
            const route = routes.find(element => {
                return path === element.path
            })
            return route
        }
    },
    created () {
        const route = this.getRoute()
        this.currentView = route ? route.name : 'html404'
        EventBus.$on('navigate', () => {
            this.currentView = this.getRoute().name
        })
    }
}


window.onpopstate = function() {
    EventBus.$emit('navigate')  
};