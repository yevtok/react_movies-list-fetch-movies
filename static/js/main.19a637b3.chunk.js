(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(6),a=c.n(i),s=(c(13),c(8)),n=c(2),r=c(1),l=(c(14),c(15),c(16),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=(c(18),c(7)),m=c.n(j),b="https://www.omdbapi.com/?apikey=".concat("68309ce0");var u=function(e){var t=e.onAdd,c=Object(r.useState)(""),i=Object(n.a)(c,2),a=i[0],s=i[1],d=Object(r.useState)(!1),j=Object(n.a)(d,2),u=j[0],h=j[1],v=Object(r.useState)(null),O=Object(n.a)(v,2),x=O[0],f=O[1],p=Object(r.useState)(!1),N=Object(n.a)(p,2),g=N[0],y=N[1],w=x?"Search again":"Find a movie";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){var t;e.preventDefault(),h(!0),(t=a,fetch("".concat(b,"&t=").concat(t)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){if(Object.hasOwn(e,"Error"))throw new Error;f(function(e){var t=e.Poster,c=e.Title,i=e.Plot,a=e.imdbID;return{title:c,description:i,imgUrl:"N/A"!==t?t:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"https://www.imdb.com/title/".concat(a),imdbId:a}}(e))})).catch((function(){return y(!0)})).finally((function(){h(!1),s("")}))},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input",value:a,onChange:function(e){s(e.target.value),y(!1)}})}),g&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":u}),disabled:!a.trim(),children:w})}),x&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){x&&t(x),f(null)},children:"Add to the list"})})]})]}),x&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:x})]})]})},h=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(u,{onAdd:function(e){c.find((function(t){return t.imdbId===e.imdbId}))||i((function(t){return[].concat(Object(s.a)(t),[e])}))}})})]})};a.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.19a637b3.chunk.js.map