import { generate } from 'multiple-cucumber-html-reporter';

generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  metadata:{
      browser: {
          name: 'chrome',
          version: '120'
      },
      device: 'Local test machine',
      platform: {
          name: 'windows',
          version: '10'
      }
  },
  customData: {
      title: 'Run Info',
      data: [
          { label: 'Project', value: 'Ecommerce' },
          { label: 'Execution Start Time', value: new Date().toLocaleString() },
          { label: 'Execution End Time', value: new Date().toLocaleString() }
      ]
  }
});