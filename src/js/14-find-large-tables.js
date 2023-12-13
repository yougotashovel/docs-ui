(function () {
  'use strict'
  document.addEventListener('DOMContentLoaded', function () {
    const tables = document.querySelectorAll('table.tableblock')
    tables && tables.forEach((table) => {
      if (table.offsetHeight > 1000) {
        const wrapper = document.createElement('div')
        wrapper.className = 'tablecontainer'
        table.parentNode.insertBefore(wrapper, table)
        wrapper.appendChild(table)
      }
    })
  })
})()
