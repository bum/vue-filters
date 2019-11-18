# vue-filters

In [Vue 1 Filters](https://cli.vuejs.org/config/), there's a list of bultin filters those removed from Vue2.
If we want to reuse those filters, just add `vue-filter2` into dependencies.

```sh
yarn add vue-filter2
```

* Use all filters from `vue-filter2`
```javascript
import Vue from 'vue'
import VueFilter2 from 'vue-filter2'

Vue.use(VueFilter2)
```


* Select filters required, seperated by 'space'
```javascript
import Vue from 'vue'
import VueFilter2 from 'vue-filter2'

Vue.use(VueFilter2, { filters: "lowercase uppercase" })
```


* Use a pre-defined Filter
```javascript
import Vue from 'vue'
import { uppercaseFilter } from 'vue-filter2'

Vue.use(uppercaseFilter)
```


* Make your owned filters, with any transform function
```javascript
import Vue from 'vue'
import { filter, uppercase } from 'vue-filter2'

Vue.use(filter(uppercase))
```


# Supported Filters

## String

* capitalize
* currency
* lowercase
* placeholder
* pluralize
* trim
* truncate
* uppercase

## Array

* filterBy
* findBy
* limitBy
* orderBy
