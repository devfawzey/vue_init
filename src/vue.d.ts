import "vue";

declare module "vue" {
    interface ComponentCustomProperties {
        $translate: (key: string) => string
    }
}