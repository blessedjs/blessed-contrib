var blessed = require("@blessed/neo-blessed")
  , contrib = require('../../')
  , screen = blessed.screen()
  , gauge = contrib.gauge({label: 'Progress', percent: 25})
    
screen.append(gauge)
screen.render()