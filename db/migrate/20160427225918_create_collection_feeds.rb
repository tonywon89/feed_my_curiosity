class CreateCollectionFeeds < ActiveRecord::Migration
  def change
    create_table :collection_feeds do |t|
      t.integer :feed_id, null: false
      t.integer :collection_id, null: false

      t.timestamps null: false
    end

    add_index :collection_feeds, [:feed_id, :collection_id], unique: true
    add_index :collection_feeds, :feed_id
    add_index :collection_feeds, :collection_id
  end
end
