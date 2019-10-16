import {NavItemModel} from '@/components/model/nav-item.model';

export class NavMenuModel {
    public name: string;
    public icon: string;
    public router: string;
    public navItem: NavItemModel[];

    constructor(name: string, icon: string, router: string, {navItem = []}) {
        this.name = name;
        this.icon = icon;
        this.router = router;
        this.navItem = navItem;
    }
}
