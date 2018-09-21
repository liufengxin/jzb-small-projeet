const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 替换文本中换行<br />
const replaceBr = date => {
  if (!date) return false
  let newText = date
  let m = date.length / 4
  for (let i = 0; i < m; i++) {
    newText = newText.replace("<br />", "\n")
  }
  return newText
}

const timestamp = date => {
  let time = date
  if (!time) {
    return null
  }
  let day = parseInt(time / 86400)
  let hour = parseInt((time - day * 86400) / 3600)
  let min = parseInt((time - day * 86400 - hour * 3600) / 60)
  if (hour < 10 && hour > 0) {
    hour = '0' + hour
  }
  if (min < 10 && min > 0) {
    min = '0' + min
  }
  if (day != 0) {
    return day + '天' + hour + "小时" + min + "分"
  } else if (day == 0 && hour != 0) {
    return hour + "小时" + min + "分"
  } else if (day == 0 && hour == 0 && min != 0) {
    return min + "分"
  }
}

module.exports = {
  formatTime: formatTime,
  replaceBr: replaceBr,
  timestamp: timestamp
}
