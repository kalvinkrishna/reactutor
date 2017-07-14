import React from 'react';
import {render} from "react-dom";
import Header from './header';

import "./baliradianceplugin/css/style.css"
import "./baliradianceplugin/css/styles.css"
import "./baliradianceplugin/css/custom-style.css"
import "./App.css"
render(
	<Header/>
	,
	document.getElementById('root')
);
	
require('./module1.js');
require('./module2.js');
require('./footer.js');

