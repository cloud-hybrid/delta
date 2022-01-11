//
//  S3_UtilityApp.swift
//  Shared
//
//  Created by Jacob Sanders on 1/10/22.
//

import SwiftUI

@main
struct Application: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            Content()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
