import {defineType, type StringDefinition} from 'sanity'

import type {AsyncListPluginConfig} from '..'
import {AsyncList} from '../components/async-list'

export const asyncListType = (config: AsyncListPluginConfig): StringDefinition =>
  defineType({
    name: 'asyncList',
    type: 'string',
    components: {
      input: (props) => AsyncList(props, config),
    },
  })
