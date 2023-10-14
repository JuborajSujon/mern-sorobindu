# REST API - RESTful API

<p>A REST API also know as RESTful API is an application programming inferface (API or web API) that conforms to the constraints of REST architectural style and allows for representational state transfer and was created by computer scientist Roy Fielding.</p>

# ROY FIELDING - the founder

<p>Roy Thomas fielding is an American computer scientist, one of the principal authors of the HTTP specifivation and the originator of the representational state transfer architectural style. He is an authority on computer network architecture and co-founded the apache HTTP server project.</p>

# Why API

- Multi Platform apps development
- Data sharing system
- Helps React, Angular, Vue, Mobile apps developers for building their application.

# Fetch API

- Get api data
- make a complete data `CRUD` by using response and request

## Get api data by fetch api call

```Javascript
fetch("api url").then(data=>data.json()).then(data=>{
  //data manage
})
```

## Data fetch by `axios`

### Install `axios` by npm/yarn <br>

<code>$ npm install axios</code><br><code>$ yarn install axios</code>

### Get data by axios with get request

```Javascript
axios.get('api url').then(data=>{
 //data manage
})
```

### Insert data by axios with POST request

```Javascript
axios.post('api url', {
 name: data,
 email: data,
 ............
}).then(data=>{
 //data manage
})
```

### Delete data by axios with delete request

```Javascript
axios.delete('api url/' + id).then(data=>{
 //data manage
})
```

### Edit data by axios with PUT/PATCH request

```Javascript
axios.put('api url', {
 name: data,
 email: data,
 ............
}).then(data=>{
 //data manage
})
```

# JSON Server

- This is a data store system server for `react`, `angular`, `vue` developers for entry
- For Creating a `REST API`
- Complete `no-SQL` Database standard
- Alternative of `MongoDB`, `Firebase`

**Install JSON Server**

- First set a npm project
- Then install JSON server<br>
  <code>$ npm install json-server --save-dev</code>

**Setup Server Watch**

- Open package.json file
- Add a new script for json server watch <br>
  <code>json-server --watch db.json --port 3004</code>

**Create a `JSON data Structure` for your project**

- Customer
- Products
- Users
- Role
- Blog Post
- Comments

**Run `JSON Server`**<br>
<code>$ npm runl scriptName</code>

# Search Data form server

**Search single data**<br>

<p>/table/id</p>

**Relationship data**<br>

<p>role/1/users</p>

**Search data file fields name**<br>

<p>user?name=asraf</p>
<p>user?name=asraf&cell=01912438258</p>

**Limit data for pagination**<br>

<p>user?_page=1&_limit=2</p>

**Data sorting**<br>

<p>user?_sort=id&_order=(desc/asc)</p>

**Text Search**<br>

<p>user?q=search_text</p>
