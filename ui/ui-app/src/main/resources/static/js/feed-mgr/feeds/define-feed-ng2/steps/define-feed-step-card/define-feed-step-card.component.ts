import {Component, Input, OnInit} from "@angular/core";
import {DefaultFeedModel, FeedModel, Step} from "../../model/feed.model";
import {FormGroup} from "@angular/forms";
import {DefineFeedService} from "../../services/define-feed.service";
import {FormsModule} from '@angular/forms'
import {AbstractFeedStepComponent} from "../AbstractFeedStepComponent";
import {StateRegistry, StateService} from "@uirouter/angular";

@Component({
    selector: "define-feed-step-card",
    styleUrls: ["js/feed-mgr/feeds/define-feed-ng2/steps/define-feed-step-card/define-feed-step-card.component.css"],
    templateUrl: "js/feed-mgr/feeds/define-feed-ng2/steps/define-feed-step-card/define-feed-step-card.component.html"
})
export class DefineFeedStepCardComponent implements OnInit {

    @Input()
    public feed: FeedModel;

    @Input()
    public step : Step;

    @Input()
    public mode ?:string;

    constructor() {

    }

    ngOnInit() {
        if(this.mode == undefined){
            this.mode = 'normal'
        }
    }



}