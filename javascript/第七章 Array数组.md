[TOC]

## findIndex

```javascript
this.QuestionList.findIndex(
	obj => obj.guid == this.QuestionInfo.guid
);
```

## filter

```javascript
let checked_question = this.currentBeforeQuestions.filter(question => question.id == visual.qId)[0]
```

## forEach

```javascript
state.FilterList.forEach((filter, index) => {
    if (Object.values(filter).includes(filterType)) 			{
        let script = new FilterAction()
        state.FilterList[index].scripts.push(script)
    } else {
        let newFilter = new Filter({
            type: filterType
        })
        let script = new FilterAction()
        newFilter.scripts.push(script)
        state.FilterList.push(newFilter)
    }
})
```

