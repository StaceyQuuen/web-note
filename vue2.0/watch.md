```javascript
 watch: {
    $route: {
      handler: function(val, oldVal){
        if (val.path.indexOf('/index/buy-keywords') != -1||val.path.indexOf('/index/usercenter') != -1||val.path.indexOf('/index/history') != -1||val.path.indexOf('/index/news') != -1||val.path.indexOf('/index/academic') != -1||val.path.indexOf('/index/policy') != -1||val.path.indexOf('/searchNews') != -1||val.path.indexOf('/searchPapers') != -1||val.path.indexOf('/searchPolicys') != -1) {
          this.showUserLogin = false
        }else {
          this.showUserLogin = true
        }
      },
      //初始化时监听
      immediate: true,
      // 深度观察监听
      deep: true
    },
    isLogin(newVal, oldVal) {
        this.$emit("childEvent", this.isLogin);
    },
    ifOrgLogin(newVal, oldVal){
        this.$emit("childEventOrg", this.ifOrgLogin);
    }
  },
```

