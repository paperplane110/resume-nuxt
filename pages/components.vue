<template>
    <div class="divide-y">
        <Text h1>Components.</Text>
        <section>
            <Text h3 title>
                <code>Text</code>
            </Text>
            <Text p>
                Rich text with well-defined typographic styles, inspired by
                <ColorLink :href="NextUILink">Next UI</ColorLink>.
            </Text>
            <Text h1>h1: This is a h1 text.</Text>
            <Text h2>h2: This is a h2 text.</Text>
            <Text h3>h3: This is a h3 text.</Text>
            <Text h4>h4: This is a h4 text.</Text>
            <Text p>p: This is a <code>p</code> text.</Text>
            <Text sm>sm: This is a <code>sm</code> text.</Text>
            <Text p>b: This is a <b>bolded</b> text.</Text>
            <Text p>em: This is a <em>emphasized</em> text.</Text>
        </section>
        <section>
            <Text h3 title><Code>ColorLink</Code></Text>
            <Text>The links would be rendered by different color according to its <Code>type</Code> attribute.</Text>
            <Text>
                <ColorLink type="primary">primary</ColorLink>
                <ColorLink type="secondary">secondary</ColorLink>
                <ColorLink type="success">success</ColorLink>
                <ColorLink type="warning">warning</ColorLink>
                <ColorLink type="error">error</ColorLink>
            </Text>
        </section>
        <section>
            <Text h3><Code>Card</Code></Text>
            <Text>
                The <code>Card</code> component has three parts: header, body, and footer, which can be separately
                defined by <code>slot</code> tags. It also has the shadow effect while mouse is hovering over it.
            </Text>
            <br />
            <Card>
                <template #header><Text h4>Card header</Text></template>
                <template #body>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas
                        officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos
                        asperiores adipisci ad eveniet repellendus
                    </Text>
                </template>
                <template #footer>
                    <Text class="text-gray-400">Card footer</Text>
                </template>
            </Card>
            <br />
            <div
                class="p-1.5rem h-300px w-250px bg-gray-100 rounded-1rem transition-all duration-300 hover:shadow-lg test">
                <Text class="text-gray-400" sm>TO EXPORE</Text>
                <Text h4 class="text-white">Find the breathtaking scene in nature</Text>
            </div>
        </section>
        <section>
            <Text h3 code>NavBar</Text>
            <NavBar />
        </section>
        <section>
            <Text h3 code>Sparkle</Text>
            <Text>
                This is <Sparkle>sparking text</Sparkle>. You can use it to wrap some
                text or img elements. Also, it has some interesting effect, like:
                <Sparkle rainbow> rainbow sparkles </Sparkle>. You can also choose
                whatever color you like:
                <Sparkle color="lightseagreen"> lightseagreen sparkle.</Sparkle>
            </Text>
        </section>
        <section>
            <Text h3 code>Description</Text>
            <Text>
                The <Code>Description</Code> component contains an image and it's
                description. The corners of the image have been rounded. The image is
                defined by <Code>src</Code> prop. The description could be defined as a
                child components.
            </Text>
            <Description></Description>
            <Text>The image and text's order could be reversed when you pass
                <Code>reverse</Code> props. Additionally, the width proportion of the
                image and text area can be modified by given number to
                <Code>textSize</Code> or <Code>imgSize</Code> props.
            </Text>
            <Description reverse src="/img/sample2.jpg" textSize="3"></Description>
        </section>
    </div>
</template>

<script setup lang="ts">
const NextUILink = 'https://nextui.org/docs/components/text'
</script>

<style>
section {
    margin-bottom: 2rem;
}

.test {
    background-image: url(/img/iceberg.jpg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
}
</style>
