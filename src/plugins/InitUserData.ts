// load
import {useFetch} from "@vueuse/core";
import {BASE_URL} from "@/utils/constants.ts";

const {data,error} = useFetch(BASE_URL) // fetchData