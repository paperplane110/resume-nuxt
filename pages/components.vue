<template>
  <Container>
    <div class="divide-y w-full">
      <div>
        <br />
        <Text hero>Components.</Text>
        <Text>
          The DIY components used in this website,
          inspired by <ColorLink :href="NextUILink">Next UI</ColorLink>.
        </Text>
        <br />
      </div>
      <section>
        <Text h3 title>
          <code>Text</code>
        </Text>
        <Text p>
          Rich text with well-defined typographic styles.
        </Text>
        <Text hero>This is a <em>hero</em> text.</Text>
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
        <Text h3 title><Code>AbbrTip</Code></Text>
        <Text>
          This componet uses the tooltip to show the meaning of a <AbbrTip tip="abbreviation">abbr</AbbrTip>.
          The abbr would be decorated with a pink '?' mark at the top right corner.
        </Text>
      </section>
      <section>
        <Text h3 title><Code>ColorLink</Code></Text>
        <Text>The links would be rendered by different color according to its
          <Code>type</Code> attribute.</Text>
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
          The <code>Card</code> component has three parts: header, body, and
          footer, which can be separately defined by <code>slot</code> tags.
        </Text>
        <Card class="p-1.5rem">
          <template #header><Text h4>Card header</Text></template>
          <template #body>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis fugit earum voluptas officia, quasi saepe et commodi,
              dolores cumque quam fuga ullam, itaque ea dignissimos asperiores
              adipisci ad eveniet repellendus
            </Text>
          </template>
          <template #footer>
            <Text class="text-gray-400">Card footer</Text>
          </template>
        </Card>
        <br />

        <Text>
          Cards' visual styles can be defined by <code>variant</code> attribute.
          There are three variants: <code>shadow</code>(default),
          <code>flat</code>, and <code>bordered</code>
        </Text>
        <div class="flex gap-2 <sm:flex-col">
          <Card class="p-1rem flex-1" variant="shadow">
            <template #body><Text>This is a <code>shadow</code> card</Text></template>
          </Card>
          <Card class="p-1rem flex-1" variant="flat">
            <template #body><Text>This is a <code>flat</code> card</Text></template>
          </Card>
          <Card class="p-1rem flex-1" variant="bordered">
            <template #body><Text>This is a <code>bordered</code> card</Text></template>
          </Card>
        </div>
        <br />

        <Text>
          If <code>isHoverable</code> attribute is enabled, the card will have
          shadow effect while mouse is hovering over it.
        </Text>
        <Card class="p-1rem" variant="flat" isHoverable>
          <template #body><Text>Hover effect enabled</Text></template>
        </Card>
        <br />

        <Text>
          Additionally, you can also design a fine looking card with image cover.
        </Text>
        <br />
        <div class="flex gap-4 <sm:flex-col">
          <Card class="min-h-300px flex-1 test" variant="flat">
            <template #header>
              <div class="px-1.5rem pt-5">
                <Text class="text-gray-400" sm>TO EXPORE</Text>
              </div>
            </template>
            <template #body>
              <div class="px-1.5rem">
                <Text h4 class="text-white">The breathtaking scene in nature</Text>
              </div>
            </template>
            <template #footer>
              <div class="p-1rem backdrop-filter backdrop-blur-md rounded-b-1rem border-t-gray-400 border-t-1">
                <div class="flex justify-between items-center">
                  <div>
                    <Text sm class="text-gray-300">Travel App </Text>
                  </div>
                  <div>
                    <button class="px-2 py-1 bg-cyan-100 bg-opacity-30 rounded-16px">
                      <Text sm b class="text-cyan-500">Download</Text>
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </Card>
          <Card class="min-h-300px flex-[2] test2" variant="flat">
            <template #header>
              <div class="px-1.5rem pt-5">
                <Text class="text-gray-300" sm>DIVE INTO</Text>
              </div>
            </template>
            <template #body>
              <div class="px-1.5rem">
                <Text h4 class="text-white">Life is best spent by the sea</Text>
              </div>
            </template>
            <template #footer>
              <div class="p-1rem backdrop-filter backdrop-blur-md rounded-b-1rem border-t-gray-400 border-t-1">
                <div class="flex justify-between items-center">
                  <div>
                    <Text sm class="text-gray-300">Travel App </Text>
                  </div>
                  <div>
                    <button class="px-2 py-1 bg-cyan-100 bg-opacity-30 rounded-16px">
                      <Text sm b class="text-sky-700">Download</Text>
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </section>

      <!-- NavBar -->
      <section>
        <Text h3 code>NavBar</Text>
        <NavBarV1 />
        <br />
        <NavBar />
        <Text h4 code>NavBarColorSwitch</Text>
        <NavBarColorSwitch />
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
        <Description reverse src="/img/sample2.jpg" :textSize="3"></Description>
      </section>

      <section>
        <Text h3 code>ArticleTitle</Text>
        <ArticleTitle title="Cyberpunk 2077 is now released" date="2077/10/13"
          description="Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification"
          cover="/img/cyberpunk.png" :tags="['Game', 'RPG', 'Cyberpunk', 'CDPR']" />
      </section>

      <!-- <section>
        <Text h3 code>CardWithSpotLight</Text>
        <CardWithSpotLight />
      </section> -->

      <section>
        <Text h2>Image Components</Text>
        <Text>
          Image components has two main components: <code>Image</code> and <code>ImageBg</code>.
          Both of them have <Sparkle>blur effect</Sparkle> while loading.
          Behind the stage, the child component <code>ImageBlur</code> has been builded as the mask of the image,
          which is powered by <ColorLink :href="BlurHashLink" target="_blank">BlurHash</ColorLink>.
          Now let's see how it looks!
        </Text>

        <Text h3 code>Image</Text>
        <Text>
          This component is just like <code>&lt;img&gt;</code> elements with blur effect on loading.
          It has four properties:
        </Text>
        <ul>
          <li>src (string): the source of the image</li>
          <li>hash (string): the hash string represents the image, see <ColorLink :href="BlurHashLink" target="_blank">
              BlurHash</ColorLink>.</li>
          <li>aspectRatio (optional: number): height / width * 100</li>
          <li>alt (optional: string): the description of the image</li>
        </ul>
        <br />
        <Image src="/img/gallery/2022_bj_red_leaf.jpeg" hash="LVKmwwp{krRj8_xsg4Six]xtWCt6" />

        <Text h3 code>ImageBg</Text>
        <Text>Define Image as the background of a <code>&lt;div&gt;</code>.
          The image will be at central, fills div, and won't leave any blank edges.
          The most important thing it that the image <em><u>won't be deformed</u></em>.
        </Text>
        <div class="mb-2 w-300px border-b-2 border-b-black text-center"><Text base>300px</Text></div>
        <ImageBg class="w-300px h-300px" src="/img/gallery/2022_bj_red_leaf.jpeg" hash="LVKmwwp{krRj8_xsg4Six]xtWCt6">
        </ImageBg>

        <Text h3 code>ImageBlur</Text>
        <Text>This component has two properties:</Text>
        <ul>
          <li>hash (string): the number represents the image after <b>BlurHash</b> encoding.</li>
          <li>aspectRatio (number): height / width * 100</li>
        </ul>
        <br />
        <div class="grid grid-cols-2">
          <div class="text-center">
            <Image src="/img/gallery/2022_bj_red_leaf.jpeg" hash="LVKmwwp{krRj8_xsg4Six]xtWCt6" />
            <Text base>Original picture</Text>
          </div>
          <div class="text-center">
            <ImageBlur />
            <Text base>Blurred picture</Text>
          </div>
        </div>

      </section>
    </div>
  </Container>
</template>

<script setup lang="ts">
const NextUILink = 'https://nextui.org/docs/components/text'
const BlurHashLink = 'https://github.com/woltapp/blurhash'
</script>

<style>
section {
  margin-bottom: 2rem;
}

.test {
  background-image: url(/img/iceberg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.test2 {
  background-image: url(/img/sea.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
