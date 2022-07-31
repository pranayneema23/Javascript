//default export
import person form './person.js'
import prs from './person.js'

//named export
import {smth} from './utility.js'
import {smth as Smth} from './utility.js'
import * as bundled from './utility.js' //export all and bundled as class
//You can access bundled.clean, bundled.baseData