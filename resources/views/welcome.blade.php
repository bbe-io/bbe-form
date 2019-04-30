<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="app" class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title text-center m-b-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="423.529" height="144.118" viewBox="0 0 423.529 144.118"><g fill="#010101"><path d="M72.57 140.024H8.486c-.576 0-.576-2.303 0-2.303H25.18c.767 0 1.15-.19 1.15-.767V7.063c0-.576-.384-.768-1.15-.768H8.486c-.576 0-.576-2.302 0-2.302H63.36c24.56 0 44.32 10.168 44.32 31.466 0 18.034-16.117 31.464-33 32.04 24.175.575 42.594 14.006 42.594 36.454 0 18.226-14.774 36.07-44.705 36.07zM60.29 6.294h-6.14c-.768 0-1.15.192-1.15.767v59.287H66.62c13.814 0 17.46-6.524 17.46-30.123 0-22.64-5.18-29.93-23.792-29.93zm4.412 62.164H53v68.495c0 .576.383.768 1.15.768h13.238c17.844 0 23.408-7.48 23.408-32.615 0-30.698-6.907-36.647-26.094-36.647zM222.213 140.024H158.13c-.575 0-.575-2.303 0-2.303h16.693c.768 0 1.15-.19 1.15-.767V7.063c0-.576-.383-.768-1.15-.768H158.13c-.575 0-.575-2.302 0-2.302h54.874c24.56 0 44.32 10.168 44.32 31.466 0 18.034-16.116 31.464-33 32.04 24.174.575 42.594 14.006 42.594 36.454 0 18.226-14.774 36.07-44.705 36.07zm-12.28-133.73h-6.14c-.767 0-1.15.192-1.15.767v59.287h13.623c13.814 0 17.46-6.524 17.46-30.123-.002-22.64-5.18-29.93-23.793-29.93zm4.413 62.164h-11.704v68.495c0 .576.384.768 1.15.768h13.24c17.844 0 23.407-7.48 23.407-32.615 0-30.698-6.907-36.647-26.094-36.647zM418.864 140.024h-111.28c-.385 0-.385-2.303 0-2.303h16.883c.767 0 1.15-.19 1.15-.767V7.063c0-.576-.383-.768-1.15-.768h-16.884c-.384 0-.384-2.302 0-2.302h101.112c.768 0 .768.384.768.575v40.675c0 .384-2.303.384-2.303 0 0-17.843-11.512-38.948-35.303-38.948h-18.42c-.958 0-1.342.192-1.342.767v61.973h4.412c15.35 0 25.135-12.663 25.135-25.902 0-.384 1.918-.384 1.918 0v54.105c0 .384-1.918.384-1.918 0 0-13.046-9.785-25.9-25.135-25.9h-4.412v65.616c0 .576.384.768 1.343.768h18.994c31.274 0 44.897-23.023 44.897-42.785 0-.384 2.11-.384 2.11 0v44.513c0 .382-.192.574-.576.574zM137.835 57.906l10.142 10.142-10.142 10.143-10.143-10.142zM287.448 57.9l10.143 10.142-10.142 10.143-10.142-10.143z"></path></g></svg>
                    <br>Forms
                </div>

                <form class="text-left" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
                    <bbe-text-input
                        v-model="form.first_name"
                        id="first_name"
                        label="First name"
                        name="first_name" :form="form"
                    ></bbe-text-input>
                    <bbe-select
                        v-model="form.country"
                        id="country"
                        label="Country"
                        :options="countries"
                        option-label-key="name"
                        option-value-key="code"
                        name="country" :form="form"
                    ></bbe-select>
                    <bbe-text-input
                        v-model="form.last_name"
                        id="last_name"
                        label="Last Name"
                        name="last_name" :form="form"
                    ></bbe-text-input>
                    <bbe-text-input
                        v-model="form.email"
                        id="email"
                        label="Email"
                        type="email"
                        name="email" :form="form"
                    ></bbe-text-input>
                    <bbe-text-input
                        v-model="form.description"
                        id="description"
                        label="Description"
                        name="description" :form="form"
                    ></bbe-text-input>

                    <div class="div">
                        <bbe-renderless
                            v-model="form.renderless"
                            id="renderless"
                            type="checkbox"
                            label="Renderless input"
                            name="renderless" :form="form"
                        >
                            <template v-slot:default="input">
                                <label for="renderless">
                                    <input id="renderless" :value="input.value" @change="input.change" :checked="input.value" type="checkbox">
                                    Renderless input is <span v-html="input.value ? 'true' : 'false'"></span>
                                </label>
                            </template>
                        </bbe-renderless>
                    </div>

                    <button class="btn btn-primary" :disabled="form.errors.any()">Submit</button>
                </form>
            </div>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
