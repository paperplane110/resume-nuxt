<template>
    <div class="p-1.5rem bg-gray-100 rounded-1rem transition-all duration-300 hover:shadow-lg">
        <div class="card-header">
            <slot name="header">header</slot>
        </div>
        <div class="card-body">
            <slot name="body">body</slot>
        </div>
        <div class="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
