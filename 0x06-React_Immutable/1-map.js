// Convert object into an Immutable Map using Map (shallow conversion)
import { Map } from 'immutable';

export default function getImmutableObject(object) {
  // We'll add the conversion logic here next
  const immutableMap = Map(object);
  return immutableMap;
