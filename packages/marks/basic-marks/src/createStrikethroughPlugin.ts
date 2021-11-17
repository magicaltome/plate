import { onKeyDownToggleMark, ToggleMarkPlugin } from '@udecode/plate-common';
import { createPluginFactory } from '@udecode/plate-core';

export const MARK_STRIKETHROUGH = 'strikethrough';

/**
 * Enables support for strikethrough formatting.
 */
export const createStrikethroughPlugin = createPluginFactory<ToggleMarkPlugin>({
  key: MARK_STRIKETHROUGH,
  isLeaf: true,
  handlers: {
    onKeyDown: onKeyDownToggleMark,
  },
  options: {
    hotkey: 'mod+shift+s',
  },
  deserializeHtml: [
    { validNodeName: ['S', 'DEL', 'STRIKE'] },
    {
      validStyle: {
        textDecoration: 'line-through',
      },
    },
  ],
});