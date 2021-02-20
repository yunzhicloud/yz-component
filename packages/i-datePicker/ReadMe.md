```jsx
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 200px" ></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="datetimerange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    import { Row, Col, DatePicker } from 'view-design'
    export default {
        components:{
            Row, Col,DatePicker,
        },
        data () {
            return {
                options1: {
                    shortcuts: [
                        {
                            text: 'Today',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click today');
                            }
                        },
                        {
                            text: 'Yesterday',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click yesterday');
                            }
                        },
                        {
                            text: 'One week',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click a week ago');
                            }
                        }
                    ]
                },
            }
        }
    }
</script>
```
