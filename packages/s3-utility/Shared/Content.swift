//
//  ContentView.swift
//  Shared
//
//  Created by Jacob Sanders on 1/10/22.
//

import SwiftUI
import CoreData
import Foundation

/// Group {
///     if isLoggedIn {
///         WelcomeView()
///     } else {
///         LoginView()
///     }
/// }
/// .navigationBarTitle("Start")

struct Content: View {
    @Environment(\.managedObjectContext) private var viewContext
    
    @FetchRequest(
        sortDescriptors: [NSSortDescriptor(keyPath: \Item.timestamp, ascending: true)],
        animation: .default)
    private var items: FetchedResults<Item>
    
    @State private var queue = [];
    
    struct Ocean: Identifiable, Hashable {
        let name: String
        let id = UUID()
    }
    
    @State private var multiSelection = Set<UUID>()
    private var oceans = [
        Ocean(name: "Pacific"),
        Ocean(name: "Atlantic"),
        Ocean(name: "Indian"),
        Ocean(name: "Southern"),
        Ocean(name: "Arctic")
    ]
    var body: some View {
        NavigationView {
            List(oceans, selection: $multiSelection) {
                Text($0.name)
            }
            .navigationTitle("Oceans")
#if os(iOS)
            .toolbar { EditButton() }
#endif
            ForEach(items) { item in
                NavigationLink {
                    Text("Item at \(item.timestamp!, formatter: itemFormatter)")
                } label: {
                    Text(item.timestamp!, formatter: itemFormatter)
                }
            }
            .onDelete(perform: deleteItems)
            .toolbar {
#if os(iOS)
                ToolbarItem(placement: .navigationBarTrailing) {
                    EditButton()
                }
#endif
                ToolbarItemGroup {
                    Button(action: clear) {
                        Label("Delete Item(s)", systemImage: "minus");
                    }
                    Button(action: addItem) {
                        Label("Add Item", systemImage: "plus");
                    }
                }
                /// ToolbarItem {
                ///     Button(action: nothing) {
                ///         Label("Delete Item(s)", systemImage: "minus");
                ///     }
                /// }
            }
            Text("Select an item")
        }
    }
    
    private func addItem() {
        let t = Test();
        t.getStuff();
        
        withAnimation(.easeInOut(duration: 1)) {
            let newItem = Item(context: viewContext)
            newItem.timestamp = Date()
            
            do {
                try viewContext.save()
            } catch {
                // Replace this implementation with code to handle the error appropriately.
                // fatalError() causes the application to generate a crash log and terminate. You should not use this function in a shipping application, although it may be useful during development.
                let nsError = error as NSError
                fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
            }
        }
    }
    
    private func clear() {
        items.forEach(viewContext.delete)
        
//        withAnimation(.easeInOut(duration: 1)) {
//            //            let newItem = Item(context: viewContext)
//            //            newItem.timestamp = Date()
//
//            do {
//                try viewContext.save()
//            } catch {
//                // Replace this implementation with code to handle the error appropriately.
//                // fatalError() causes the application to generate a crash log and terminate. You should not use this function in a shipping application, although it may be useful during development.
//                //                let nsError = error as NSError
//                //                fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
//                let nsError = error as NSError
//                fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
//            }
//        }
    }
    
    private func deleteItems(offsets: IndexSet) {
        withAnimation {
            offsets.map { items[$0] }.forEach(viewContext.delete)
            
            do {
                try viewContext.save()
            } catch {
                // Replace this implementation with code to handle the error appropriately.
                // fatalError() causes the application to generate a crash log and terminate. You should not use this function in a shipping application, although it may be useful during development.
                let nsError = error as NSError
                fatalError("Unresolved error \(nsError), \(nsError.userInfo)")
            }
        }
    }
}

private let itemFormatter: DateFormatter = {
    let formatter = DateFormatter()
    formatter.dateStyle = .short
    formatter.timeStyle = .medium
    return formatter
}()

//struct Previews: PreviewProvider {
//    static var previews: some View {
//        Group {
//            Content().environment(\.managedObjectContext, PersistenceController.preview.container.viewContext)
//        }
//    }
//}

import Foundation

struct Country: Codable, Hashable {
    var name: String;
    var population: Int32;
}

class Test {
    func getStuff() {
        let url = "https://localhost:3443/v1/gitlab/projects/total"
        
        let task = URLSession.shared.dataTask(with: URL(string: url)!) {
            data, response, error in func callable() {
                if error != nil || data == nil {
                    print("Client error!");
                    return;
                }
                
                guard let response = response as? HTTPURLResponse, (200...299).contains(response.statusCode) else {
                    print("Server error!");
                    
                    return;
                }
                
                print("The Response is : ", response, String(data: data!, encoding: String.Encoding.utf8) ?? "");
                
            }
            callable();
        };
        
        task.resume();
    }
    func simpleGetUrlWithParamRequest() {
        let url = URL(string: "https://www.google.com/search?q=peace")!
        
        let task = URLSession.shared.dataTask(with: url) {(data, response, error) in
            
            if error != nil || data == nil {
                print("Client error!")
                return
            }
            guard let response = response as? HTTPURLResponse, (200...299).contains(response.statusCode) else {
                print("Server error!")
                return
            }
            print("The Response is : ",response)
        }
        task.resume()
    }
}
