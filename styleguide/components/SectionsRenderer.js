import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import Heading from 'rsg-components/Heading';
import './style.css';
// Avoid circular ref
// Import default implementation using `rsg-components-default`
import DefaultSectionsRenderer from 'rsg-components-default/Sections/SectionsRenderer';


const styles = ({ fontFamily, color, space }) => ({
	headingSpacer: {
		marginBottom: space[2],
	},
	descriptionText: {
		marginTop: space[0],
		fontFamily: fontFamily.base,
	},
});

const themes = ['default', 'dark']



export function SectionsRenderer({ classes, children }) {
	let sctTheme = window.localStorage.getItem('css_theme') || 'default'
	let csscontent = require(`../../src/styles/${sctTheme}/index.less`)
	return (
		<div>
			{!!children.length &&
				<div className={classes.headingSpacer}>
					<Heading level={1}>组件使用示例</Heading>
					<div style={{ marginBottom: '10px'}}>
						<span>选择主题：</span>
						<select name="" id="" defaultValue={sctTheme} onChange={v => {
							window.localStorage.setItem('css_theme', v.target.value)
							window.location.reload()
						}}>
							{
								themes.map(t => {
									return (<option key={t} value={t}>{t}</option>)
								})
							}
						</select>
					</div>
					<hr />
					<p className={classes.descriptionText}>
						在main.js中写下以下示例代码
                    </p>
					<pre>
						<code className={'codearea'}>
							<span>import Vue from 'vue';</span>
							<span>import Yz from '@yunzhicloud/components-lib'</span>
							<span>import '@yunzhicloud/components-lib/src/styles/{sctTheme}/index.scss'</span>
							<span>Vue.use(Yz)</span>
						</code>
					</pre>
				</div>}
			<DefaultSectionsRenderer>{children}</DefaultSectionsRenderer>
		</div>
	);
}

SectionsRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
};

export default Styled(styles)(SectionsRenderer);
