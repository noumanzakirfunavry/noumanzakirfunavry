export const GTM_ID = 'G-BGX8ER4Y2J'

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}




// old
// export const GA_TRACKING_ID = 'G-BGX8ER4Y2J'

// // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const pageview = (url) => {
//   window.gtag('config', GA_TRACKING_ID, {
//     page_path: url,
//   })
// }

// // https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }) => {
//   window.gtag('event', action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   })
// }