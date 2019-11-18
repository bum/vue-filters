# @bum/vue-filters

In [Vue 1 Filters](https://cli.vuejs.org/config/), there's a list of bultin filters those removed from Vue2.
If we want to reuse those filters, just add `@bum/vue-filters` into dependencies.

```shell script
yarn add @bum/vue-filters
```

* Use all built-in filters from `@bum/vue-filters`
```javascript
import Vue from 'vue'
import VueFilters from '@bum/vue-filters'

Vue.use(VueFilters)
```

* Select bilt-in filters, seperated by 'space'
```javascript
import Vue from 'vue'
import VueFilters from '@bum/vue-filters'

Vue.use(VueFilters, { filters: "lowercase uppercase" })
```

* Make your **custom filter** with any transform function
```javascript
import Vue from 'vue'
import { filter, uppercase } from '@bum/vue-filters'

Vue.use(filter(uppercase))
```

* Combine **custom filter** with `lodash` functions

```shell script
yarn add lodash
```

```javascript
import Vue from 'vue'
import { filter } from '@bum/vue-filters'
import { toLower, toUpper } from 'lodash/string'
Vue.use(filter(toLower, toUpper))
```

```html
<div>{{ 'youR Name'|toUpper }}</div>
```


# Built-in Filters

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

# `lodash` [functions](https://lodash.com/docs/) 
(use **custom filter**)
