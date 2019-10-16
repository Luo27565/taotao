export class NavItemModel {
    public name: string;
    public icon: string;
    public router: string;

    constructor(name: string, icon: string, router: string) {
        this.name = name;
        this.icon = icon;
        this.router = router;
    }
}
