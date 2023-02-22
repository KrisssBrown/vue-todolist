const { createApp } = Vue


let tasks = [
    {
        text: 'Quarterly Newsletter',
        done: false
    }, {
        text: 'Recruiting blog post',
        done: false
    }, {
        text: 'Mobile app launch',
        done: false
    }, {
        text: 'Interview Jhon H.',
        done: false
    }, {
        text: 'Summit update to mobile storefronts',
        done: false
    }, {
        text: 'Schedule Meeting with Alex',
        done: false
    }, {
        text: 'Homepage refresh',
        done: false
    }, {
        text: 'Onboard new Sales team members',
        done: false
    }, {
        text: 'Review editorial calendar ',
        done: false
    }
]

createApp({
    data() {
        return {
            tasks: tasks,
            inputValue: '',
            isActive: false

        }
    },

    methods: {
        addTask() {
            // console.log(this.inputValue)
            const newTask = {text: this.inputValue, done:false}
            // console.log(newTask)
            this.tasks.push(newTask)
            this.inputValue = ''
            // console.log(this.inputValue)
            // console.log(this.tasks)
        },
        
        removeTask(startIndex){
            this.tasks.splice(startIndex, 1)
        },
        toggleActive() {
            this.isActive = !this.isActive;
            console.log(this.isActive)
        },
        // updated(){
        //     console.log(isChecked)
        // }
    }
}).mount('#app')