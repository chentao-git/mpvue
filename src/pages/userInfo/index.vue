<template>
  <div class="index">
    <div class="zan-panel">
      <zan-field v-bind="Object.assign({}, handleFunctions, base.name)" :value="user.name"/>
      <zan-field v-bind="Object.assign({}, handleFunctions, base.signature)" :value="user.signature"/>
      <zan-field v-bind="Object.assign({}, handleFunctions, base.collectGoods)"/>
      <zan-field v-bind="Object.assign({}, handleFunctions, base.tel)"/>
      <zan-field v-bind="Object.assign({}, handleFunctions, base.address)"/>
    </div>

    <div class="zan-btns">
      <button
        class="zan-btn zan-btn--primary"
        @click="submitInput">保存信息</button>
    </div>

    <_toast />
  </div>
</template>

<script>
  import ZanField from '../../components/zan/field'
  import { getComponentByTag } from '../../utils/helper'
  import ZanToast from '../../components/zan/toast'

  export default {
    components: {
      ZanField,
      _toast: ZanToast
    },
    mounted () {
      this.toast = getComponentByTag(this, '_toast')
    },
    data () {
      return {
        base: {
          name: {
            title: '名字',
            placeholder: '请填入你的名字',
            componentId: 'name'
          },
          signature: {
            title: '个性签名',
            placeholder: '请填入你的个性签名',
            componentId: 'signature'
          },
          collectGoods: {
            // focus: true,
            title: '收货人',
            placeholder: '名字',
            componentId: 'collectGoods'
          },
          tel: {
            error: true,
            title: '联系电话',
            inputType: 'number',
            placeholder: '请输入手机号',
            componentId: 'tel'
          },
          address: {
            title: '详细地址',
            type: 'textarea',
            placeholder: '请输入详细地址',
            componentId: 'address'
          }
        },
        handleFunctions: {
          handleZanFieldChange: this.handleZanFieldChange,
          handleZanFieldFocus: this.handleZanFieldFocus,
          handleZanFieldBlur: this.handleZanFieldBlur
        },
        user: {
          name: '卖女孩的小火柴',
          signature: '这家伙很懒，什么都没留下',
        }
      }
    },
    methods: {
      handleZanFieldChange (e) {
        const { componentId, target, detail } = e
        console.log('[zan:field:change]', componentId, target, detail)
      },

      handleZanFieldFocus (e) {
        const { componentId, target, detail } = e
        console.log('[zan:field:focus]', componentId, target, detail)
      },

      handleZanFieldBlur (e) {
        const { componentId, target, detail } = e
        console.log('[zan:field:blur]', componentId, target, detail)
      },
      clearInput () {
        this.value = ' '
        this.value = ''
        console.log(this)
      },
      submitInput () {
        // this.toast.showZanToast('保存成功')
        this.$commonjs.reLaunchTo('/pages/personal/main')
      }
    }
  }
</script>

<style>
  .index {
    height: 100vh;
    background: #e2e2e2;
  }

</style>
