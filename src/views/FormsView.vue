<script setup lang="ts">
import { ref } from 'vue';
import MainBanner from '@/components/MainBanner.vue';
interface FormData {
    name: string;
    email_subscribe: boolean;
    pizza_is_da_best: string;
    hobbies: string[];
    state: string,
    message: string
}
const data = ref<FormData>({ name: '', email_subscribe: false, pizza_is_da_best: 'This answer is correct', hobbies: [], state: '', message: '' });
</script>
<template>
    <main-banner heading="Forms Demo" />
    <form class="flex flex-col gap-4  max-w-md m-auto">
        <div class="flex flex-col gap-2"><span>Data Output</span>{{ data }}</div>
        <label class="flex flex-col gap-1">
            Your name:
            <input type="text" class="dark:bg-slate border-2 dark:border-white border-black border-solid p-1"
                v-model="data.name" />
        </label>
        <label class="flex gap-2 items-center">
            <input type="checkbox" v-model="data.email_subscribe" />
            <span>Do you agree to have your email spammed daily?</span>
        </label>
        <label class="flex gap-2 items-center">
            <input type="checkbox" v-model="data.pizza_is_da_best" :true-value="`This answer is correct`"
                :false-value="`This answer is completely wrong`" />
            <span>Pizza is the best food.</span>
        </label>
        <fieldset>
            <legend>My hobbies include:</legend>

            <div class="flex gap-2 items-center">
                <input type="checkbox" id="running" v-model="data.hobbies" value="Running" />
                <label>Running</label>
            </div>
            <div class="flex gap-2 items-center">
                <input type="checkbox" v-model="data.hobbies" value="Video Games" />
                <label>Video Games</label>
            </div>
            <div class="flex gap-2 items-center">
                <input type="checkbox" v-model="data.hobbies" value="Programming" />
                <label>Programming</label>
            </div>
        </fieldset>
        <label class="flex flex-col gap-1">
            State of residence:
            <select v-model="data.state" class="text-black">
                <option value="" disabled>Select a state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
        </label>
        <label class="flex flex-col gap-1">
            Textarea that removes unneeded white space at the beginning and ending of the string:
            <textarea v-model.trim="data.message"
                class="dark:bg-slate border-2 dark:border-white border-black border-solid p-1" rows="5"
                cols="50"></textarea>
        </label>
        <label class="text-center">
            <input type="submit" value="Submit" class="bg-slate dark:bg-white text-white dark:text-black rounded-lg p-2" />
        </label>
    </form>
</template>
