import { Component } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent {
  objective: string = "The objective of the campaign is to create awareness about corneal blindness and the importance of eye donation.";

  arguments: string[] = [
    "By donating your eyes, you can give the gift of sight to someone in need, transforming their life.",
    "Eye donation is a selfless act of kindness that can leave a lasting impact on society and future generations."
  ];
}
