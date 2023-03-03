"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[124],{2124:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[t.isLoading?e("Spinner"):e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h1",[t._v(t._s(t.restaurant.name))]),e("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),e("div",{staticClass:"well"},[e("ul",{staticClass:"list-unstyled"},[e("li",[e("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),e("li",[e("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),e("li",[e("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),e("div",{staticClass:"col-md-8"},[e("p",[t._v(t._s(t.restaurant.description))])])]),e("hr"),e("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])],1)},s=[],n=a(6233),i=a(4145),u=a(7259),d=a(7213),o={name:"AdminRestaurant",mixins:[i.L],data(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:""},isLoading:!0}},components:{Spinner:n.Z},created(){const{id:t}=this.$route.params;this.fetchRestaurant(t)},beforeRouteUpdate(t,e,a){const{id:r}=t.params;this.fetchRestaurant(r),a()},methods:{async fetchRestaurant(t){try{this.isLoading=!0;const{data:e}=await u.Z.restaurants.getDetail({restaurantId:t}),{id:a,name:r,Category:s,image:n,opening_hours:i,tel:d,address:o,description:c}=e.restaurant;this.restaurant={...this.restaurant,id:a,name:r,categoryName:s?s.name:"未分類",image:n,openingHours:i,tel:d,address:o,description:c},this.isLoading=!1}catch(e){this.isLoading=!1,console.error(e.message),d.F.fire({icon:"error",title:"無法取得餐廳資料，請稍後再試！"})}}}},c=o,l=a(3736),m=(0,l.Z)(c,r,s,!1,null,null,null),g=m.exports},7259:function(t,e,a){var r=a(7213);e["Z"]={adminUsers:{get(){return r.l.get("/admin/users")},update({userId:t,isAdmin:e}){return r.l.put(`admin/users/${t}`,{isAdmin:e})}},categories:{get(){return r.l.get("/admin/categories")},create({name:t}){return r.l.post("/admin/categories",{name:t})},update({categoryId:t,name:e}){return r.l.put(`/admin/categories/${t}`,{name:e})},delete({categoryId:t}){return r.l["delete"](`/admin/categories/${t}`)}},restaurants:{getDetail({restaurantId:t}){return r.l.get(`/admin/restaurants/${t}`)},update({restaurantId:t,formData:e}){return r.l.put(`/admin/restaurants/${t}`,e)},create({formData:t}){return r.l.post("/admin/restaurants",t)},get(){return r.l.get("/admin/restaurants")},delete({restaurantId:t}){return r.l["delete"](`/admin/restaurants/${t}`)}}}}}]);
//# sourceMappingURL=124.51070d8c.js.map