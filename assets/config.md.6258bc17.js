import{r as b,a as g,c as m,o as a,b as l,d as y,n as w,u,e as t,F as k,f as x,t as p,g as _,h as f,w as r,v as T,i as v,j as D}from"./app.b5aaf967.js";import{D as V}from"./chunks/Datepicker.a9476e8a.js";const S=_('<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><h3 id="v-model" tabindex="-1"><code>v-model</code> <a class="header-anchor" href="#v-model" aria-hidden="true">#</a></h3><ul><li>Type: <code>Date</code></li><li>Required: yes</li></ul><p>The actual date that will be selected. The component behaves as close to Vue 3 documentation on custom component inputs as possible, using <code>modelValue</code> prop and <code>update:modelValue</code> event pair. Use those if you want to have more control over your model binding.</p><h3 id="upperlimit" tabindex="-1"><code>upperLimit</code> <a class="header-anchor" href="#upperlimit" aria-hidden="true">#</a></h3><ul><li>Type: <code>Date</code></li><li>Required: no</li></ul><p>Upper limit (not inclusive) for available dates for picking. All dates above that limit will not be selectable.</p><h3 id="lowerlimit" tabindex="-1"><code>lowerLimit</code> <a class="header-anchor" href="#lowerlimit" aria-hidden="true">#</a></h3><ul><li>Type: <code>Date</code></li><li>Required: no</li></ul><p>Lower limit (not inclusive) for available dates for picking. All dates below that limit will not be selectable.</p><h3 id="disableddates" tabindex="-1"><code>disabledDates</code> <a class="header-anchor" href="#disableddates" aria-hidden="true">#</a></h3><ul><li>Type: <code>{ dates: Date[], predicate: (target: Date) =&gt; boolean }</code></li><li>Required: no</li></ul><p>All dates listed in the <code>dates</code> array will not be selectable. Can also take in a function via the <code>predicate</code> key, which tests each date in the current view of the calendar, returning <code>true</code> if date should be disabled.</p><h3 id="disabledtime" tabindex="-1"><code>disabledTime</code> <a class="header-anchor" href="#disabledtime" aria-hidden="true">#</a></h3><ul><li>Type: <code>{ dates: Date[], predicate: (target: Date) =&gt; boolean }</code></li><li>Required: no</li></ul><p>All dates listed in the <code>dates</code> array will not be selectable in the timepicker view. Can also take in a function via the <code>predicate</code> key, which tests each date in the timepicker view, returning <code>true</code> if date should be disabled.</p><h3 id="startingview" tabindex="-1"><code>startingView</code> <a class="header-anchor" href="#startingview" aria-hidden="true">#</a></h3><ul><li>Type: <code>&#39;time&#39; | &#39;day&#39; | &#39;month&#39; | &#39;year&#39;</code></li><li>Default: <code>&#39;day&#39;</code></li></ul><p>View on which the date picker should open. Can be either <code>year</code>, <code>month</code>, <code>day</code> or <code>time</code>. If <code>startingView</code> is <code>time</code> and <code>minimumView</code> is <code>time</code> then only view of the calendar <code>time</code> will be available.</p><h3 id="daypickerheadingformat" tabindex="-1"><code>dayPickerHeadingFormat</code> <a class="header-anchor" href="#daypickerheadingformat" aria-hidden="true">#</a></h3><ul><li>Type: <code>String</code> (date-fns <a href="https://date-fns.org/docs/format" target="_blank" rel="noreferrer">format string</a>)</li><li>Default: <code>LLLL yyyy</code></li></ul><p><code>date-fns</code>-type formatting for a month view heading. By default prints full month as text and selected year (e.g. January 2021).</p><h3 id="weekdayformat" tabindex="-1"><code>weekdayFormat</code> <a class="header-anchor" href="#weekdayformat" aria-hidden="true">#</a></h3><ul><li>Type: <code>String</code> (date-fns <a href="https://date-fns.org/docs/format" target="_blank" rel="noreferrer">format string</a>)</li><li>Default: <code>EE</code></li></ul><p><code>date-fns</code>-type formatting for a line of weekdays on day view. By default uses three-letter representation (e.g. Fri).</p><h3 id="inputformat" tabindex="-1"><code>inputFormat</code> <a class="header-anchor" href="#inputformat" aria-hidden="true">#</a></h3><ul><li>Type: <code>String</code> (date-fns <a href="https://date-fns.org/docs/format" target="_blank" rel="noreferrer">format string</a>)</li><li>Default: <code>yyyy-MM-dd</code></li></ul><p><code>date-fns</code>-type format in which the string in the input should be both parsed and displayed. By default uses ISO format (e.g. 2021-01-01).</p><h3 id="locale" tabindex="-1"><code>locale</code> <a class="header-anchor" href="#locale" aria-hidden="true">#</a></h3><ul><li>Type: <code>Locale</code> <a href="https://date-fns.org/v2.16.1/docs/I18n#usage" target="_blank" rel="noreferrer"><code>date-fns</code> locale object</a></li><li>Default: <code>date-fns/locale/en</code></li></ul><p>Used in all date string formatting (e.g. see default <code>dayPickerHeadingFormat</code>)</p><h3 id="weekstartson" tabindex="-1"><code>weekStartsOn</code> <a class="header-anchor" href="#weekstartson" aria-hidden="true">#</a></h3><ul><li>Type: <code>0 | 1 | 2 | 3 | 4 | 5 | 6</code></li><li>Default: <code>1</code></li></ul><p>Day on which the week should start. Number from 0 to 6, where 0 is Sunday and 6 is Saturday. Week starts with a Monday (1) by default.</p><h3 id="clearable" tabindex="-1"><code>clearable</code> <a class="header-anchor" href="#clearable" aria-hidden="true">#</a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Allows clearing the selected date and setting the value to <code>null</code></p><h3 id="disabled" tabindex="-1"><code>disabled</code> <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Disables datepicker and prevents it&#39;s opening</p><h3 id="typeable" tabindex="-1"><code>typeable</code> <a class="header-anchor" href="#typeable" aria-hidden="true">#</a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Allows user to input date manually</p><h3 id="allowoutsideinterval" tabindex="-1"><code>allowOutsideInterval</code> <a class="header-anchor" href="#allowoutsideinterval" aria-hidden="true">#</a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Allows user to click dates outside of current interval.</p><h2 id="styling" tabindex="-1">Styling <a class="header-anchor" href="#styling" aria-hidden="true">#</a></h2><p>The input itself can be styled via passing classes to it. <a href="https://v3.vuejs.org/guide/component-attrs.html#disabling-attribute-inheritance" target="_blank" rel="noreferrer">Attribute fallthrough</a> is enabled. Keep in mind that input itself is not a top-level element, as it is contained within the top-level <code>div</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Heavy restyling via variables has not been tested, as I am mostly using this component as-is. If you find any issues while adjusting the colors (e.g. some colors don&#39;t change or a setting is missing) please <a href="https://github.com/icehaunter/vue3-datepicker/issues" target="_blank" rel="noreferrer">file an issue on GitHub</a>.</p></div><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h3><p>Style can be altered significantly without editing CSS files of the components. This is done via CSS variables. Following variables are available:</p><table><thead><tr><th>Variable name</th><th>Default value</th><th>Type</th></tr></thead><tbody><tr><td><code>--vdp-bg-color</code></td><td><code>#fff</code></td><td>color</td></tr><tr><td><code>--vdp-text-color</code></td><td><code>#000</code></td><td>color</td></tr><tr><td><code>--vdp-box-shadow</code></td><td>See source</td><td>shadow</td></tr><tr><td><code>--vdp-border-radius</code></td><td><code>3px</code></td><td>size</td></tr><tr><td><code>--vdp-heading-size</code></td><td><code>2.5em</code></td><td>size</td></tr><tr><td><code>--vdp-heading-weight</code></td><td><code>bold</code></td><td>weight</td></tr><tr><td><code>--vdp-heading-hover-color</code></td><td><code>#eeeeee</code></td><td>color</td></tr><tr><td><code>--vdp-arrow-color</code></td><td><code>currentColor</code></td><td>color</td></tr><tr><td><code>--vdp-elem-color</code></td><td><code>currentColor</code></td><td>color</td></tr><tr><td><code>--vdp-disabled-color</code></td><td><code>#d5d9e0</code></td><td>color</td></tr><tr><td><code>--vdp-hover-color</code></td><td><code>#fff</code></td><td>color</td></tr><tr><td><code>--vdp-hover-bg-color</code></td><td><code>#0baf74</code></td><td>color</td></tr><tr><td><code>--vdp-selected-color</code></td><td><code>#fff</code></td><td>color</td></tr><tr><td><code>--vdp-selected-bg-color</code></td><td><code>#0baf74</code></td><td>color</td></tr><tr><td><code>--vdp-current-date-outline-color</code></td><td><code>#888888</code></td><td>color</td></tr><tr><td><code>--vdp-current-date-font-weight</code></td><td><code>bold</code></td><td>weight</td></tr><tr><td><code>--vdp-elem-font-size</code></td><td><code>0.8em</code></td><td>size</td></tr><tr><td><code>--vdp-elem-border-radius</code></td><td><code>3px</code></td><td>size</td></tr><tr><td><code>--vdp-divider-color</code></td><td><code>#d5d9e0</code></td><td>color</td></tr></tbody></table><h3 id="styling-example-and-playground" tabindex="-1">Styling example and playground <a class="header-anchor" href="#styling-example-and-playground" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Note that variables affect only the datepicker popup. If you want to change styles for the input, just pass it in the <code>:style</code> prop or use classes.</p></div><br>',56),C={key:0},z=t("code",null,"currentColor",-1),A=["onUpdate:modelValue"],I=["onUpdate:modelValue"],F={key:1},L=["onUpdate:modelValue"],N=t("summary",null,"Copy serialized object with these settings",-1),j={class:"language-json"},R=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props","link":"#props","children":[{"level":3,"title":"v-model","slug":"v-model","link":"#v-model","children":[]},{"level":3,"title":"upperLimit","slug":"upperlimit","link":"#upperlimit","children":[]},{"level":3,"title":"lowerLimit","slug":"lowerlimit","link":"#lowerlimit","children":[]},{"level":3,"title":"disabledDates","slug":"disableddates","link":"#disableddates","children":[]},{"level":3,"title":"disabledTime","slug":"disabledtime","link":"#disabledtime","children":[]},{"level":3,"title":"startingView","slug":"startingview","link":"#startingview","children":[]},{"level":3,"title":"dayPickerHeadingFormat","slug":"daypickerheadingformat","link":"#daypickerheadingformat","children":[]},{"level":3,"title":"weekdayFormat","slug":"weekdayformat","link":"#weekdayformat","children":[]},{"level":3,"title":"inputFormat","slug":"inputformat","link":"#inputformat","children":[]},{"level":3,"title":"locale","slug":"locale","link":"#locale","children":[]},{"level":3,"title":"weekStartsOn","slug":"weekstartson","link":"#weekstartson","children":[]},{"level":3,"title":"clearable","slug":"clearable","link":"#clearable","children":[]},{"level":3,"title":"disabled","slug":"disabled","link":"#disabled","children":[]},{"level":3,"title":"typeable","slug":"typeable","link":"#typeable","children":[]},{"level":3,"title":"allowOutsideInterval","slug":"allowoutsideinterval","link":"#allowoutsideinterval","children":[]}]},{"level":2,"title":"Styling","slug":"styling","link":"#styling","children":[{"level":3,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":3,"title":"Styling example and playground","slug":"styling-example-and-playground","link":"#styling-example-and-playground","children":[]}]}],"relativePath":"config.md"}'),B={name:"config.md"},q=Object.assign(B,{setup(U){const c=b(new Date),n=g({"--vdp-bg-color":{value:"#ffffff",type:"color"},"--vdp-text-color":{value:"#000000",type:"color"},"--vdp-box-shadow":{value:"0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 0 1px 0 rgba(128, 144, 160, 0.81)",type:"shadow"},"--vdp-border-radius":{value:"3px",type:"size"},"--vdp-heading-size":{value:"2.5em",type:"size"},"--vdp-heading-weight":{value:"bold",type:"weight"},"--vdp-heading-hover-color":{value:"#eeeeee",type:"color"},"--vdp-arrow-color":{value:"currentColor",type:"color"},"--vdp-elem-color":{value:"currentColor",type:"color"},"--vdp-disabled-color":{value:"#d5d9e0",type:"color"},"--vdp-hover-color":{value:"#ffffff",type:"color"},"--vdp-hover-bg-color":{value:"#0baf74",type:"color"},"--vdp-selected-color":{value:"#ffffff",type:"color"},"--vdp-selected-bg-color":{value:"#0baf74",type:"color"},"--vdp-current-date-outline-color":{value:"#888888",type:"color"},"--vdp-current-date-font-weight":{value:"bold",type:"weight"},"--vdp-elem-font-size":{value:"0.8em",type:"size"},"--vdp-elem-border-radius":{value:"3px",type:"size"},"--vdp-divider-color":{value:"#d5d9e0",type:"color"}}),s=m(()=>Object.entries(n).map(([o,{value:d}])=>[o,d]).reduce((o,[d,e])=>(o[d]=e,o),{}));return(o,d)=>(a(),l("div",null,[S,y(V,{style:w({...u(s),padding:"4px"}),modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=e=>c.value=e)},null,8,["style","modelValue"]),t("table",null,[(a(!0),l(k,null,x(n,(e,h)=>(a(),l("tr",{key:h},[t("td",null,[t("code",null,p(h),1)]),e.type==="color"?(a(),l("td",C,[t("label",null,[z,f(),r(t("input",{type:"checkbox","onUpdate:modelValue":i=>e.value=i,"true-value":"currentColor","false-value":"#000000"},null,8,A),[[T,e.value]])]),f(" \xA0 "),e.value!=="currentColor"?r((a(),l("input",{key:0,type:"color","onUpdate:modelValue":i=>e.value=i},null,8,I)),[[v,e.value]]):D("",!0)])):(a(),l("td",F,[r(t("input",{type:"text","onUpdate:modelValue":i=>e.value=i},null,8,L),[[v,e.value]])]))]))),128))]),t("details",null,[N,t("div",j,[t("pre",null,[t("code",null,p(u(s)),1)])])])]))}});export{R as __pageData,q as default};
