import { get } from "@/system/utils/request";

export function getRequest(params, config) {
  return get('home', params, config)
}