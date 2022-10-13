Vue.component('error', {
  props: ['hidden'],
  template: `<div v-show="hidden">
                <span>Возникла ошибка при подключении к серверу</span>
            </div>`
});