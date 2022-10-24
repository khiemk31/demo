import React from 'react';

export default function highlightColor(color) {
  switch (color) {
    case 'Đỏ':
      return '#ff0000';
    case 'Vàng':
      return '#FFFF00';
    case 'Đen':
      return '#000000';
    case null:
      return null;
    default:
      alert('Nothing');
  }
}
