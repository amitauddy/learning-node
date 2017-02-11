'use strict';

const configurableModule = require('./configurable_module');

const configApp_1 = configurableModule({configPrefix: '$ '});
const configApp_2 = configurableModule({configPrefix: '# '});

configApp_1.log('normal user!');
configApp_2.log('super user!');