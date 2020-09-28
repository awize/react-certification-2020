import React from 'react'

import { Drawer } from '../ui'

export default {
  title: 'ui Components/Drawer',
  component: Drawer
}

const Template = (args) => (
  <div>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, magni magnam eos totam
    ut alias maiores exercitationem odio aliquid fugit animi inventore provident impedit
    cupiditate quia officiis, cum id necessitatibus. Sed velit sit voluptatibus soluta
    architecto, ratione perferendis repellat quo fuga eveniet. Et placeat dolores beatae
    accusantium iure natus blanditiis libero nesciunt quisquam reiciendis neque excepturi,
    iste culpa saepe vel. Expedita corporis nihil consectetur eveniet velit officia ullam
    error eum magni asperiores accusamus odio voluptas recusandae possimus molestiae
    pariatur harum non nesciunt, adipisci tempore obcaecati quasi perspiciatis iste!
    Dolorem, iste? Beatae totam amet labore porro! Accusamus, repudiandae facilis. Ipsam
    illo odit temporibus praesentium, hic odio, sapiente voluptatum saepe autem officiis
    sunt itaque, modi sint ea. At quaerat laboriosam blanditiis consectetur. Incidunt, a
    accusantium exercitationem tempore, dolorum reiciendis amet vitae repellendus odit
    excepturi esse ea nam eum inventore illo recusandae ab iusto veniam qui corporis
    maxime! Minima autem illum nemo alias. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Aut neque modi laborum provident optio non placeat maxime, voluptas
    vitae dolore possimus fuga debitis magnam recusandae aliquam quisquam ex quia quaerat!
    Quae atque assumenda soluta aspernatur, possimus illum officia excepturi doloremque
    enim accusamus laborum neque nostrum cupiditate provident dicta ducimus explicabo
    dignissimos. Quos animi ipsam aspernatur dolor, iste ad velit cum! Quasi nam ipsam,
    amet deserunt vitae corporis tempore sapiente eum ea cum illum porro ut distinctio
    fugiat nostrum exercitationem aut nulla! Eius, consequatur iure! Eos accusantium
    minima obcaecati nam in? Quibusdam possimus accusamus ipsam, facere quidem sed quia,
    enim est quis eos minima quisquam, libero ad dolore ducimus beatae consectetur
    voluptate? Officiis laborum placeat repellendus facere rerum labore ipsum provident?
    Nobis sit veniam, corporis accusamus atque, deserunt ad eos commodi eum, laudantium
    omnis natus magni quisquam qui doloremque ipsam. Magnam possimus dolor blanditiis
    minus sapiente omnis quos ratione suscipit officiis. Iure, molestiae, quaerat
    distinctio velit reprehenderit nobis reiciendis illum rem inventore nostrum deleniti
    repellendus. Fugit itaque illo ab minus voluptate temporibus inventore perspiciatis
    reiciendis nesciunt, autem nam odit iusto aut?
    <Drawer {...args}>
      Drawer Content <br />
      We should put some padding
    </Drawer>
  </div>
)

export const Main = Template.bind({})
Main.args = {
  open: false
}
