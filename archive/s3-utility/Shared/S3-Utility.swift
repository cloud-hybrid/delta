//
//  S3_UtilityApp.swift
//  Shared
//
//  Created by Jacob Sanders on 1/10/22.
//

import SwiftUI

@main
struct Application: App {
    let persistenceController = Persistence.Controller.container;

    var body: some Scene {
        WindowGroup {
            Content()
                .environment(\.managedObjectContext, Persistence.Controller.container.viewContext)
        }
    }
}

struct Previews: PreviewProvider {
    static var previews: some View {
        Group {
            Content().environmentObject(
                .environment(\.managedObjectContext, Persistence.Controller.container.viewContext)
            )
        }
    }
}
