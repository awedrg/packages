const fontMap = {
  1: ['add', 0],
  2: ['add', 2],
  3: ['add', 3],
  4: ['add', 5]
}
function add (old, amount) {
  return old + amount + 'px'
}
function mul (old, amount) {
  return old * amount + 'px'
}
let handler = null
function updateDom(source, grade) {
  if(source instanceof Element) {
    let hasText = false
    let isInput = source instanceof HTMLInputElement
    if(source.hasAttribute('nochange')) {
      grade = 1
    } else{
      for (let i of source.childNodes) {
        if (i.nodeType === 3 && i.nodeValue.trim()) {
          hasText = true
        } else {
          updateDom(i, grade)
        }
      }
    }
    if ((hasText || isInput) && source.getAttribute('font-grade') != grade) {
      let oldfontsize = +source.getAttribute('base-font')
      if (!oldfontsize) {
        oldfontsize = parseInt(getComputedStyle(source).fontSize)
        source.setAttribute('base-font', oldfontsize)
      }
      let newfontsize = handler(oldfontsize, fontMap[grade][1])
      source.setAttribute('font-grade',grade)
      source.style.setProperty('font-size', newfontsize, 'important');
    }
  }
}
import store from '/store/index'
export default {
  computed: {
    fontGrade () {
      return store && store.state ? store.state.font : 0
    }
  },
  methods: {
    changeFontSize () {
      if (!this.fontGrade) return
      handler = fontMap[this.fontGrade][0] === 'add' ? add : mul
      updateDom(this.$el, this.fontGrade)
    }
  },
  mounted () {
    this.changeFontSize()
  },
  updated () {
    this.changeFontSize()
  },
  watch: {
    fontGrade () {
      this.$forceUpdate()
    }
  }
}