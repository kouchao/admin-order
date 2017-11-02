export default {
  baseUrl: 'http://localhost:8888',
  date: function (nS) {
    var date = new Date(nS).toLocaleString()
    return date.replace(/年|月/g, '-').replace(/日/g, ' ')
  }
}
