export const Action = {
  Left: 'Left',
  FastDrop: 'FastDrop',
  Pause: 'Pause',
  Right: 'Right',
  Rotate: 'Rotate',
  SlowDrop: 'SlowDrop',
}

export const Key = {
  ArrowUp: Action.Rotate,
  ArrowDown: Action.SlowDrop,
  ArrowLeft: Action.Left,
  ArrowRight: Action.Right,
  KeyP: Action.Pause,
  Space: Action.FastDrop,
  KeyESQ: Action.Quit,
}

export const actionIsDrop = (action) =>
  [Action.SlowDrop, Action.FastDrop].includes(action)

export const actionForKey = ({ keycode } = Key[keycode])
