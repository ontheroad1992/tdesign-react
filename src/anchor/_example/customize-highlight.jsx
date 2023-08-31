import React, { useState } from 'react';
import { Anchor, Button } from 'tdesign-react';

const { AnchorItem } = Anchor;

export default function AnchorBase() {
  const [active, setActive] = useState('#自定义游标锚点');

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <Button onClick={() => setActive('#基础锚点')}>基础锚点</Button>
        <Button onClick={() => setActive('#多级锚点')} style={{ marginLeft: '8px' }}>
          多级锚点
        </Button>
      </div>
      <Anchor
        getCurrentAnchor={(link) => {
          console.log('link', link);
          return active;
        }}
      >
        <AnchorItem href="#基础锚点" title="基础锚点" />
        <AnchorItem href="#多级锚点" title="多级锚点" />
        <AnchorItem href="#自定义游标锚点" title="自定义游标锚点" />
        <AnchorItem href="#指定容器锚点" title="指定容器锚点" />
        <AnchorItem href="#特定交互锚点" title="特定交互锚点" />
        <AnchorItem href="#不同尺寸的锚点" title="不同尺寸的锚点" />
        <AnchorItem href="#自定义锚点高亮" title="自定义锚点高亮" />
      </Anchor>
    </div>
  );
}
