<template>
    <div class="bottom-menu">
        <div class="select-all">
            <check-button class="eddcheck" 
                          :is-checked='checkClick' 
                          @click.native="allClick"></check-button>
            <span>全选</span>
        </div>
        <span class="total-price">合计: ¥{{totalPrice}}</span>
        <span class="buy-product">去计算({{endCount}})</span>
    </div>
</template>

<script>
import CheckButton from '@/components/content/check/CheckButton.vue'
export default {
    components: {
        CheckButton
    },
    props: {
        cartList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        totalPrice() {
            return this.cartList.filter(item => {
                return item.checked
            }).reduce((preValue, item) => {
                return preValue + item.count * item.newPrice
            }, 0).toFixed(2)
        },
        endCount() {
            return this.cartList.reduce((preValue, item) => {
                return preValue + item.count
            },0)
        },
        checkClick() {
            //如果有未选中的,返回false给isChecked
            if(this.cartList.length === 0) return false
            return !(this.cartList.find(item => !item.checked))
        }
    },
    methods: {
        allClick() {
            if(this.cartList.find(item => !item.checked)) {
                //遍历未选中的,并修改其值
                this.cartList.forEach(item => item.checked = true)
            }else{
                this.cartList.forEach(item => item.checked = false)
            }
        }
    }
}
</script>

<style scoped>
    .bottom-menu {
        font-size: 14px;
        color: #888;
        height: 44px;
        display: flex;
        position: fixed;
        bottom: 49px;
        left: 0;
        right: 0;
        box-shadow: 0 -1px 1px rgba(100,100,100,0.2) ;
    }
    
    .eddcheck {
        position: absolute;
        top: 13px;
        left: 5px;
    }

    .select-all{
        position: relative;
        flex: 1;
    }
    .select-all span {
        position: absolute;
        top: 15px;
        left: 25px;
    }
    .bottom-menu .total-price {
        margin-left: 15px;
        flex: 1;
        font-size: 16px;
        color: #666;
        line-height: 44px;
    }
    .buy-product {
        background-color: orangered;
        color: #fff;
        width: 100px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        float: right;
        flex: 1;
    }
    .total-price{
        color: #ff5777;
    }
</style>