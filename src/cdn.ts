/**
 * CDN 入口（IIFE 单文件构建）
 *
 * 用法：
 * ```html
 * <script src="https://unpkg.com/agent-ui-annotation@latest/dist-cdn/agent-ui-annotation.cdn.js"></script>
 * <agent-ui-annotation theme="auto"></agent-ui-annotation>
 * <script>
 *   const anno = AgentUIAnnotation.createAnnotation({ theme: 'auto' });
 *   anno.activate();
 * </script>
 * ```
 *
 * 通过 `<script src>` 直接引入，自动注册 `<agent-ui-annotation>` 自定义元素，
 * 并把 `createAnnotation` / `registerAnnotationElement` 暴露到 `window.AgentUIAnnotation`。
 */

import { registerAnnotationElement } from './element/annotation-element';
import { createAnnotation } from './adapters/vanilla';
import type { AnnotationInstance, AnnotationOptions } from './adapters/vanilla';

// 自动注册自定义元素
registerAnnotationElement();

// 暴露到全局
const AgentUIAnnotation = {
  createAnnotation,
  registerAnnotationElement,
};

if (typeof window !== 'undefined') {
  (window as unknown as { AgentUIAnnotation: typeof AgentUIAnnotation }).AgentUIAnnotation =
    AgentUIAnnotation;
}

export { createAnnotation, registerAnnotationElement };
export type { AnnotationInstance, AnnotationOptions };
