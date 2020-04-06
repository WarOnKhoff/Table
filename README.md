<h1>Companies Table App</h1>
<h2>About</h2>
<ul>
<li><a href='#general'>General info</a></li>
<li><a href='#goals'>Project goals</a></li>
<li><a href='#dependencies'>Dependencies</a></li>
<li><a href='#setup'>Project setup</a></li>
</ul>
<hr>

<div id='general'>
<h2>General info 💡</h2>
<p>This application is designed and developed basically for REST API / HTML5 API / Responsive Markup usage showcases. Main goal was to create an application on pure JS to fetch data / preform CRUD ops / render received data on FE using provided REST API service. Also, application should be responsive for mobile devices.

For this application I've prepared simple REST API service using <strong>Node.js</strong> in couple with <strong>Express.js</strong> and established connection with <strong>Mongo DB</strong>.

Link for REST API repository <a href='https://github.com/WarOnKhoff/TableApi'>Table API</a>

</div>
<br>
<div id='goals'>
<h2>Project goals 💎</h2>
<ol>
<li>Create Table markup (min 5 cols / 200 records) ✅</li>
<li>Create Dialogs for CRUD ops (dialogs: CreateCard / UpdateCard / DeleteCard) ✅</li>
<li> Implement Dialog exit/close possible by close hanlders, outer clicks and ESC button press ✅</li>
<li> Dialog appearance / disappearance should be animated using pure CSS aproach  ✅</li>
<li>Should be possible to pass certain URL to trigger certain Dialog open state with provided data ✅</li>
<li>UI libs / frameworks are not allowed to use for custom UI components ✅</li>
<li>Implement responsive design ✅</li>

</div>
<br>
<div id='dependencies'>
<h2>Dependencies 🛠</h2>
For project bundling I choosed <strong>Parcel.js</strong> because of zero configuration to use. Frontend part deployed with <a href='https://render.com/'>Render.com</a> hosting.
REST API part deployed with <a href='https://www.heroku.com/'>Heroku.com</a> hosting.

<hr/>

      	"cssnano": "^4.1.10",
    	"parcel-bundler": "^1.12.4"

</div>
<div id='setup'>
<h2>Project Setup 🔌</h2>
<p>Steps to run app localy:</p>
<ul>
<li>
<p> Clone repo to your directory:<p>
<code>
git clone 
</code>
then
<code>
cd [project directory]
</code>
<br>
</li>
<li>
<p> After repository is cloned install dependencies with yarn on npm<p>
<code> yarn </code> or <code>npm install</code>
</li>
<li>
<p> After all You are ready to go! To start app localy:<p>
<code> yarn start </code> or <code>npm start</code>
</li>
<p>Then open:<p>
<code>http://localhost:3000/</code>
<li>
<p> To build project:<p>
<code> yarn build </code> or <code>npm run build</code>
</li>
</ul>
</div>
<br>
